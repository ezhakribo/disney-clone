/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
// import db from "../firebase";
import movieData from "../disneyPlusMoviesData.json";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
    
  // ...

  useEffect(() => {
    // db.collection("movies").onSnapshot((snapshot) => {
      let recommends = [];
      let newDisneys = [];
      let originals = [];
      let trending = [];

      const movies = Object.values(movieData.movies);

      movies.forEach((doc) => {
        switch (doc.type) {
          case "recommend":
            recommends = [...recommends, { id: Math.random(), ...doc }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: Math.random(), ...doc }];
            break;
          case "original":
            originals = [...originals, { id: Math.random(), ...doc }];
            break;
          default:
            trending = [...trending, { id: Math.random(), ...doc }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    // });
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
