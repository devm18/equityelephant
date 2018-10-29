
// example from Eric Vere

renderContent = () => {
    const { screenings, user } = this.props;
    let screeningList = screenings.map((movie, i) => (
      <div className="main-movie-cont" key={i}>
        <Movie
          movie={movie}
          getScreening={getScreening}
          user={user}
        />
      </div>
    ));
    return (<>{screeningList}</>);
  }

  render() {
    const { screenings } = this.props;
    // console.log(this.props);
    return (
      <div className="movie-list-cont">
      <h1>Screenings</h1>
        {screenings[0]
        ? this.renderContent()
        : <p>Loading...</p>}
      </div>
    );
  }
}