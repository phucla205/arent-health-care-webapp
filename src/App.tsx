import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollToTopButton from 'components/ScrollToTopButton';
import { Home, Column, NotFound, MyRecord } from 'pages';
import { PATHS } from 'utils';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTopButton />
      <Header />
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.MY_RECORD} element={<MyRecord />} />
          <Route path={PATHS.COLUMN} element={<Column />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
