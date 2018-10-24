import * as React from 'react';
import { connect } from 'react-redux';
import { Popover, PopoverBody } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

import { Actions } from '../store/actions';
import { State } from  '../store/reducer';
import { Dispatch } from '../store/store';
import { User, UserId, UsersVotes } from '../store/types';
import { VotesList } from './VotesList';

import '../css/App.css';
import '../css/avatar.css';

type AppProps = State & {
  readonly dispatch: Dispatch;
}

class App extends React.Component<AppProps, {}> {

  private static getPopoverTarget(userId: number | undefined) {
    return userId !== undefined ? `avatar${userId}` : 'body'
  }

  private readonly dispatch = this.props.dispatch;

  private readonly hidePopover = () => this.dispatch(Actions.hidePopover());

  private showPopover(id: number) {
    return () => this.dispatch(Actions.showPopover(id));
  }

  private splitUsers(users: User[], friends: User[], other: User[]) {
    for (const user of users) {
      if (this.props.friends.has(user.id)) {
        friends.push(user);
      } else {
        other.push(user);
      }
    }
  }

  private getUsersFromVotesMap(collection: UsersVotes): User[] {
    if (this.props.currentUser !== undefined) {
      return Array.from(collection[this.props.currentUser]).map(id => this.props.users[id])
    } else {
      return [];
    }
  }

  private readonly onFollow = (id: UserId) => this.dispatch(Actions.followUser(id));
  private readonly onUnFollow = (id: UserId) => this.dispatch(Actions.unfollowUser(id));

  private popover(key: number, target: string) {
    const upVotes = this.getUsersFromVotesMap(this.props.userUpvotes);
    const downVotes = this.getUsersFromVotesMap(this.props.userDownvotes);
    const upVotesFriends: User[] = [];
    const upVotesOthers: User[] = [];
    const downVotesFriends: User[] = [];
    const downVotesOthers: User[] = [];

    this.splitUsers(upVotes, upVotesFriends, upVotesOthers);
    this.splitUsers(downVotes, downVotesFriends, downVotesOthers);

    return <Popover
      key={`po-${key}`}
      placement="bottom"
      isOpen={this.props.isPopoverVisible}
      target={target}
      toggle={this.hidePopover}>
      <PopoverBody>
        <VotesList
          upVotedFriends={upVotesFriends}
          downVotedFriends={downVotesFriends}
          upVotedOther={upVotesOthers}
          downVotedOther={downVotesOthers}
          followed={this.props.followed}
          onFollow={this.onFollow}
          onUnFollow={this.onUnFollow}
        />
      </PopoverBody>
    </Popover>
  }

  private avatar(key: number, zIndex: number, userId: number) {
    const target = App.getPopoverTarget(userId);
    return [
      <img id={target}
           className="avatar"
           style={{zIndex: zIndex}}
           onClick={this.showPopover(userId)}
           key={`av-${key}`}
           src={this.props.users[userId].avatar}/>,
      this.props.currentUser === userId && this.popover(key, target)
    ]
  }

  public render() {
    const avatarsCount = this.props.avatarsList.length;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Frontend Test</h1>
        </header>
        <div className="App-intro">
          <div className="avatars-list">
            {this.props.avatarsList.map((userId, index) =>
              this.avatar(index, avatarsCount - index, userId))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => state;

export default connect(mapStateToProps)(App);
