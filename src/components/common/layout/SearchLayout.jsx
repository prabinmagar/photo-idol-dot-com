import { Outlet } from "react-router-dom";
import { Footer } from "../../footer/Footer";
import { Header } from "../../header/Header";
import PropTypes from 'prop-types';

export const SearchLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

SearchLayout.propTypes = {
  children: PropTypes.any
}