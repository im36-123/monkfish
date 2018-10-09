import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Monkfish from "../components/Monkfish";
import uuid from "uuid";

const AppRouter = () => {
  // TODO: 冗長なので、リファクタリングする
  const defaultPropsForCom = {
    banners: [
      {
        id: uuid(),
        size: "100 x 100",
        url: "http://100 x 100_##FLOOR_NAME##__##FILE_NAME##",
        shouldHide: ["pc"]
      },
      {
        id: uuid(),
        size: "200 x 200",
        url: "http://200 x 200_##FLOOR_NAME##__##FILE_NAME####EXTENTION##",
        shouldHide: []
      },
      {
        id: uuid(),
        size: "300 x 300",
        url:
          "http://300 x 300_##FLOOR_NAME##__##FILE_NAME##prefix##EXTENTION##",
        shouldHide: []
      },
      {
        id: uuid(),
        size: "400 x 400",
        url:
          "http://400 x 400_##FLOOR_NAME##__##FILE_NAME##___##THUMBNAIL_EXTENTION##",
        shouldHide: []
      }
    ]
  };
  const defaultPropsForCojp = {
    banners: [
      {
        id: uuid(),
        size: "100 x 100",
        url: "http://cojp100 x 100_##FLOOR_NAME##__##FILE_NAME##",
        shouldHide: ["pc"]
      },
      {
        id: uuid(),
        size: "200 x 200",
        url: "http://cojp200 x 200_##FLOOR_NAME##__##FILE_NAME####EXTENTION##",
        shouldHide: []
      },
      {
        id: uuid(),
        size: "300 x 300",
        url:
          "http://cojp300 x 300_##FLOOR_NAME##__##FILE_NAME##prefix##EXTENTION##",
        shouldHide: []
      },
      {
        id: uuid(),
        size: "400 x 400",
        url:
          "http://cojp400 x 400_##FLOOR_NAME##__##FILE_NAME##___##THUMBNAIL_EXTENTION##",
        shouldHide: []
      }
    ]
  };
  return (
    <Router>
      <div>
        <div>
          <header>
            <NavLink to="/" exact>
              com
            </NavLink>
            <NavLink to="/cojp">co.jp</NavLink>
          </header>
        </div>
        <Switch>
          <Route
            path="/"
            render={() => <Monkfish banners={defaultPropsForCom.banners} />}
            key="com"
            exact
          />
          <Route
            path="/cojp"
            key="cojp"
            render={() => <Monkfish banners={defaultPropsForCojp.banners} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
