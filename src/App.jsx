// HaulCentral React App – Final Build (Dashboard, Subscription Lock, Help Center, Stripe Trial System)

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const userTrialEnded = false; // Replace with real check from backend or Stripe logic

const Dashboard = () => (
  <div className="max-w-5xl mx-auto p-6 space-y-6">
    <h2 className="text-2xl font-bold">User Dashboard</h2>
    <div className="grid md:grid-cols-3 gap-4">
      <Card><CardContent className="p-4">My Loads</CardContent></Card>
      <Card><CardContent className="p-4">Billing & Subscription</CardContent></Card>
      <Card><CardContent className="p-4">Messages</CardContent></Card>
    </div>
  </div>
);

const SubscriptionLock = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-xl mx-auto mt-20 text-center">
      <h2 className="text-2xl font-bold mb-4">Trial Expired</h2>
      <p className="mb-6">Your 14-day free trial has ended. Please subscribe to continue using HaulCentral.</p>
      <Button onClick={() => navigate('/pricing')}>View Subscription Plans</Button>
    </div>
  );
};

const GettingStarted = () => (
  <div className="max-w-3xl mx-auto p-8">
    <h2 className="text-2xl font-bold mb-6">Getting Started with HaulCentral</h2>
    <ol className="list-decimal ml-5 space-y-2 text-gray-700">
      <li>Create your account and start your 14-day free trial.</li>
      <li>Use the dashboard to post, find, and manage loads.</li>
      <li>Use the Rate Confirmation template for shipping agreements.</li>
      <li>Connect with factoring companies or access TMS tools.</li>
      <li>Once your trial ends, pick a subscription to continue.</li>
    </ol>
  </div>
);

const PricingPage = () => (
  <div className="max-w-4xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-4 text-center">Subscription Plans</h2>
    <div className="flex justify-center mb-6">
      <span className="mr-2">Monthly / Annual Toggle (Coming Soon)</span>
    </div>
    <div className="grid md:grid-cols-3 gap-4">
      <Card><CardContent className="p-4">Owner‑Operator Standard — $25/mo</CardContent></Card>
      <Card><CardContent className="p-4">Carrier Pro — $180/mo</CardContent></Card>
      <Card><CardContent className="p-4">Broker Premium — $129.99/mo</CardContent></Card>
    </div>
  </div>
);

const HelpCenter = () => (
  <div className="max-w-3xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">Help & Support</h2>
    <p className="mb-4">Email us at <a href="mailto:support@haulcentral.com" className="text-blue-600">support@haulcentral.com</a></p>
    <p className="text-gray-600">Live chat is available at the bottom right of your screen.</p>
  </div>
);

const WeatherWidget = () => (
  <div className="mt-8 text-center">
    <iframe title="weather" src="https://forecast7.com/en/48d15103d62/williston/" frameBorder="0" width="100%" height="200"></iframe>
  </div>
);

export default function App() {
  return (
    <Router>
      <Helmet>
        <title>HaulCentral | Smart Load Board for Trucking</title>
        <meta name="description" content="Connect with brokers and shippers, post/search loads, manage subscriptions, access weather and support." />
      </Helmet>
      <nav className="bg-gray-900 text-white p-4 flex justify-between">
        <Link to="/" className="font-bold">HaulCentral</Link>
        <div className="space-x-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/search">Search</Link>
          <Link to="/post-load">Post</Link>
          <Link to="/rate-confirmation">Rate Confirmation</Link>
          <Link to="/getting-started">Start</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<><WeatherWidget /><GettingStarted /></>} />
        <Route path="/dashboard" element={userTrialEnded ? <SubscriptionLock /> : <Dashboard />} />
        <Route path="/search" element={<div className="p-6 text-center">Load Search Page</div>} />
        <Route path="/post-load" element={<div className="p-6 text-center">Post Load Page</div>} />
        <Route path="/rate-confirmation" element={<div className="p-6 text-center">Rate Confirmation Doc</div>} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
}