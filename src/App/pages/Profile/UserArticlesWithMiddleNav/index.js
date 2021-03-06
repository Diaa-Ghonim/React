import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Style from './style.module.scss';
import { UserArticles } from '../../../features/userArticles';
import { UserLikedArticles } from '../../../features/userLikedArticles';
import { UserDislikedArticles } from '../../../features/userDislikedArticles';
import { UserSavedArticles } from '../../../features/userSavedArticles';


export default class index extends Component {

  render() {
    const { username } = this.props;
    return (
      <>
        <div className={Style.container}>
          <div>
            <ul>
              <li>
                <NavLink
                  activeClassName={Style.selected}
                  className={Style.link}
                  exact
                  to={`/${username}`}
                >
                  Articles
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={Style.selected}
                  className={Style.link}
                  to={`/${username}/likes`}
                >
                  Likes
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={Style.selected}
                  className={Style.link}
                  to={`/${username}/dislikes`}
                >
                  Dislikes
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={Style.selected}
                  className={Style.link}
                  to={`/${username}/saves`}
                >
                  Saved
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='articles-holder'>
          <Switch>
            <Route exact path={`/${username}`}>
              <h3>Please select a topic 1.</h3>
              <UserArticles username={username} />
            </Route>
            <Route path={`/${username}/likes`}>
              <h3>Please select a topic 2.</h3>
              <UserLikedArticles username={username} />
            </Route>
            <Route path={`/${username}/dislikes`}>
              <h3>Please select a topic 3.</h3>
              <UserDislikedArticles username={username} />
            </Route>
            <Route path={`/${username}/saves`}>
              <h3>Please select a topic 4.</h3>
              <UserSavedArticles username={username} />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}
