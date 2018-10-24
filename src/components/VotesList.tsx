import * as React from 'react';
import { Button } from 'reactstrap';

import { User, UserId, UserIdSet } from '../store/types';


import '../css/avatar.css';
import '../css/VotesList.css';

enum TabKind {
  Upvote,
  Downvote
}

export interface VotesListState {
  readonly activeTab: TabKind,
  readonly startTabSwitchAnimation: boolean
}

export interface VotesListProps {
  readonly upVotedFriends: User[],
  readonly upVotedOther: User[],
  readonly downVotedFriends: User[],
  readonly downVotedOther: User[],
  readonly followed: UserIdSet;
  readonly onFollow: (id: UserId) => void,
  readonly onUnFollow: (id: UserId) => void
}

export class VotesList extends React.Component<VotesListProps, VotesListState> {

  constructor(props: VotesListProps) {
    super(props);
    this.state = {
      activeTab: TabKind.Upvote,
      startTabSwitchAnimation: false
    }
  }

  private followButton(userId: UserId) {
    const isFollowing = this.props.followed.has(userId);
    const handler = isFollowing? this.props.onUnFollow : this.props.onFollow;
    const title = isFollowing? 'Following' : 'Follow';
    return <Button
      className="follow-btn"
      color={ isFollowing? "success" : "secondary" }
      onClick={ () => handler(userId) }>
        { title }
    </Button>;
  }

  private row(key: number, user: User) {
    return <div key={key} className="vote-row">
      <img className="avatar user-avatar" src={user.avatar} />
      <div className="user-text">
        <p className="user-fullname text-capitalize">{user.fullname}</p>
        <p className="user-description">6 800°</p>
      </div>
      {this.followButton(user.id)}
    </div>
  }

  private getTabHeaderCssClass(kind: TabKind) {
    return this.state.activeTab !== kind? 'inactive' : ''
  }

  private handleTabChange = (tab: TabKind) => () => {
    this.setState({
      activeTab: tab,
        startTabSwitchAnimation: true
    });
    setTimeout(() => this.setState({startTabSwitchAnimation: false}), 500);
  };

  private tabHeader(kind: TabKind) {
    return (
      <a href="#"
         className={this.getTabHeaderCssClass(kind)}
         onClick={this.handleTabChange(kind)}>
        { kind===TabKind.Upvote? "Upvote" : "Downvote"}
      </a>
  )}

  public render() {
    const friends = this.state.activeTab === TabKind.Upvote?
      this.props.upVotedFriends : this.props.downVotedFriends;
    const others = this.state.activeTab === TabKind.Upvote?
      this.props.upVotedOther : this.props.downVotedOther;
    return <div>
      <div className="tabs-header">
        {this.tabHeader(TabKind.Upvote)}
        {this.tabHeader(TabKind.Downvote)}
      </div>
      <div className={ this.state.startTabSwitchAnimation? "fade-in" : "" }>
        { friends.length!=0? <h4 className="text-uppercase">Your friends</h4> : null }
        <div>{friends.map((user, index) => this.row(index, user))}</div>
        { others.length!=0? <h4 className="text-uppercase">Other</h4> : null }
        <div>{others.map((user, index) => this.row(index, user))}</div>
      </div>
    </div>
  }
}
