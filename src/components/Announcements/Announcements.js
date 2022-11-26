import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAnnouncementsThunk } from "../../state/thunks/announcements.thunk";
import { AnnouncementsStyle } from "./Announcements.style";

const MOCK_DATA = [
  {
    title: "1 sunt",
  },
  {
    title: "2 ",
  },
  {
    title: "3 sunt",
  },
  {
    title: "4 ",
  },
  {
    title: "5 ",
  },
  {
    title: "6 ",
  },
  {
    title: "7 sunt",
  },
  {
    title: "8 sunt",
  },
  {
    title: "9 sunt",
  },
  {
    title: "10 sunt",
  },
  {
    title: "11 sunt",
  },
  {
    title: "12 sunt",
  },

  {
    title: "13 sunt",
  },

  {
    title: "14 sunt",
  },

  {
    title: "15 sunt",
  },

  {
    title: "16 sunt",
  },
  {
    title: "17 sunt",
  },
];

function Announcements({
  filter,
  announcements,
  fetchAnnouncementsThunk,
  ...props
}) {
  // const [data, setData] = useState([]);
  const [data, handleData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 6;

  const pageNumberLimit = 6;
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  useEffect(() => {
    fetchAnnouncementsThunk();
  }, []);
  useEffect(() => {
    const value = filter;
    setcurrentPage(1);

    handleData(
      MOCK_DATA.filter((p) => {
        //aici
        return (
          ` ${p.title} `.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
          ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !==
            -1 ||
          ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !== -1
        );
      })
    );
  }, [filter]);

  // const handleChangeFilterInput = (e) => {
  //   const { value } = e.target;
  //   setcurrentPage(1);

  //   handleData(
  //     announcements.filter((p) => {
  //       return (
  //         ` ${p.title} `.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
  //         ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !==
  //           -1 ||
  //         ` ${p.title} `.toLocaleUpperCase().indexOf(value.toLowerCase()) !== -1
  //       );
  //     })
  //   );
  // };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    handleData(MOCK_DATA); //aici
  }, [MOCK_DATA]);

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <AnnouncementsStyle>
      <h2 className="announcements-h2">Announcements</h2>
      {/* <input
        type="text"
        id="search"
        name="search"
        onChange={handleChangeFilterInput}
      ></input> */}

      <div className="announcements-container">
        {currentItems.map((item, index) => (
          <Link key={index} to={`/announcements/${index}`}>
            <div className="announcements-card">
              <div className="announcements-card-image">
                <img
                  width={300}
                  height={200}
                  src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=996"
                  alt="image card"
                />
              </div>
              <div className="announcements-card-tag">HOW TO</div>
              <div className="announcements-card-title">{item.title}</div>
              <div className="announcements-card-author">
                By Grigoras Nadia 2 weeks ago
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button
          className={`${
            currentPage == pages[0] || currentItems.length === 0
              ? "prev-disabled"
              : "prev"
          }`}
          onClick={handlePrevbtn}
          disabled={
            currentPage == pages[0] || currentItems.length === 0 ? true : false
          }
        >
          Previous posts
        </button>
        <button
          className={`${
            currentPage == pages[pages.length - 1] || currentItems.length === 0
              ? "prev-disabled"
              : "prev"
          }`}
          onClick={handleNextbtn}
          disabled={
            currentPage == pages[pages.length - 1] || currentItems.length === 0
              ? true
              : false
          }
        >
          Newer posts
        </button>
      </div>
    </AnnouncementsStyle>
  );
}

const mapStateToProps = (state) => ({
  announcements: state.announcementsState.announcements,
});

const mapDispatchToProps = {
  fetchAnnouncementsThunk: fetchAnnouncementsThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);
