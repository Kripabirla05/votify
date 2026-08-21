import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import RequireRole from './components/RequireRole.jsx'
import DashboardLayout from './components/DashboardLayout.jsx'

import AdminDashboard from './pages/admin/Dashboard.jsx'
import AdminCategories from './pages/admin/Categories.jsx'
import AdminCandidates from './pages/admin/Candidates.jsx'
import CandidateDetail from './pages/admin/CandidateDetail.jsx'
import AdminVoters from './pages/admin/Voters.jsx'
import AdminResults from './pages/admin/Results.jsx'
import AdminAnnouncements from './pages/admin/Announcements.jsx'
import AdminLogs from './pages/admin/Logs.jsx'

import CandidateDashboard from './pages/candidate/Dashboard.jsx'
import ApplyCategory from './pages/candidate/ApplyCategory.jsx'
import MyCampaign from './pages/candidate/MyCampaign.jsx'
import VoteStandings from './pages/candidate/VoteStandings.jsx'

import VoterDashboard from './pages/voter/Dashboard.jsx'
import VoteNow from './pages/voter/VoteNow.jsx'
import VoteReceipts from './pages/voter/VoteReceipts.jsx'
import VoterResults from './pages/voter/LiveResults.jsx'

import Profile from './pages/shared/Profile.jsx'

/**
 * App — the route tree.
 *
 * Each portal ("/admin", "/candidate", "/voter") is a parent route
 * whose element is <RequireRole><DashboardLayout /></RequireRole> —
 * RequireRole checks the session, DashboardLayout renders the shared
 * sidebar/topbar and an <Outlet />. Every page under that portal is a
 * *nested* child route (relative path, no leading "/"), so it renders
 * inside that <Outlet /> automatically. "index" is the default child
 * (e.g. "/admin" itself shows AdminDashboard).
 *
 * "/admin/candidates/:id" is a dynamic route — CandidateDetail reads
 * the `:id` segment with useParams(). Any unmatched URL falls through
 * to the "*" catch-all, which renders the 404 page.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Admin portal */}
      <Route
        path="/admin"
        element={
          <RequireRole role="admin">
            <DashboardLayout role="admin" />
          </RequireRole>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="candidates" element={<AdminCandidates />} />
        <Route path="candidates/:id" element={<CandidateDetail />} />
        <Route path="voters" element={<AdminVoters />} />
        <Route path="results" element={<AdminResults />} />
        <Route path="announcements" element={<AdminAnnouncements />} />
        <Route path="logs" element={<AdminLogs />} />
        <Route path="profile" element={<Profile role="admin" />} />
      </Route>

      {/* Candidate portal */}
      <Route
        path="/candidate"
        element={
          <RequireRole role="candidate">
            <DashboardLayout role="candidate" />
          </RequireRole>
        }
      >
        <Route index element={<CandidateDashboard />} />
        <Route path="apply" element={<ApplyCategory />} />
        <Route path="campaign" element={<MyCampaign />} />
        <Route path="standings" element={<VoteStandings />} />
        <Route path="profile" element={<Profile role="candidate" />} />
      </Route>

      {/* Voter portal */}
      <Route
        path="/voter"
        element={
          <RequireRole role="voter">
            <DashboardLayout role="voter" />
          </RequireRole>
        }
      >
        <Route index element={<VoterDashboard />} />
        <Route path="vote" element={<VoteNow />} />
        <Route path="receipts" element={<VoteReceipts />} />
        <Route path="results" element={<VoterResults />} />
        <Route path="profile" element={<Profile role="voter" />} />
      </Route>

      {/* 404 — must stay last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
