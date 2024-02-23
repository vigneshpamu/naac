import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/search" element={<Search />} /> */}
        {/* <Route path="/listing/:listingId" element={<Listing />} /> */}
        {/* <Route path="/events" element={<Events />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/form" element={<Form />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failed" element={<Failed />} /> */}
          {/* <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
