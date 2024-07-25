
import React from 'react'
import Main from '../component/Main'
import Row from '../component/Row'
import requests from '../Requests'


function Home() {
  return (
    <>
      <Main/>
      <Row RowId='1' title={"Popular"} FetchURL={requests.requestPopular} />
      <Row RowId='2' title={"TopRated"} FetchURL={requests.requestTopRated} />
      <Row RowId='3' title={"NowPlaying"} FetchURL={requests.requestTrending} />
      <Row RowId='4' title={"Upcoming"} FetchURL={requests.requestUpcoming} />
      <Row RowId='5' title={"Horror"} FetchURL={requests.requestHorror} />
    </>
  )
}

export default Home

