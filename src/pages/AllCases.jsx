import React, { useState } from "react";
import { ArrowLeft, Search, Scale } from "lucide-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Mock data for cases

const casesData = [
  {
    id: 1,
    caseNumber: "23-FA-234598",
    caseType: "Criminal Case",
    partyName: "Sambashiva Rao",
    court: "Supreme Court",
  },
  {
    id: 2,
    caseNumber: "22-FA-123456",
    caseType: "Criminal Case",
    partyName: "Rajesh Kumar",
    court: "High Court",
  },
  {
    id: 3,
    caseNumber: "21-FA-987654",
    caseType: "Civil Case",
    partyName: "Priya Sharma",
    court: "District Court",
  },
  {
    id: 4,
    caseNumber: "23-FA-456789",
    caseType: "Criminal Case",
    partyName: "Vikram Singh",
    court: "Supreme Court",
  },
  {
    id: 5,
    caseNumber: "22-FA-345678",
    caseType: "Civil Case",
    partyName: "Ananya Patel",
    court: "High Court",
  },
  {
    id: 6,
    caseNumber: "21-FA-234567",
    caseType: "Criminal Case",
    partyName: "Sambashiva Rao",
    court: "District Court",
  },
  {
    id: 7,
    caseNumber: "23-FA-876543",
    caseType: "Civil Case",
    partyName: "Kiran Reddy",
    court: "Supreme Court",
  },
  {
    id: 8,
    caseNumber: "22-FA-765432",
    caseType: "Criminal Case",
    partyName: "Meera Desai",
    court: "High Court",
  },
  {
    id: 9,
    caseNumber: "21-FA-654321",
    caseType: "Criminal Case",
    partyName: "Sambashiva Rao",
    court: "District Court",
  },
];

// Get unique court names and party names for filters
const courtNames = [...new Set(casesData.map((caseItem) => caseItem.court))];
const partyNames = [
  ...new Set(casesData.map((caseItem) => caseItem.partyName)),
];

function AllCases() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [selectedParty, setSelectedParty] = useState("");

  // Filter cases based on selected filters
  const filteredCases = casesData.filter((caseItem) => {
    const matchesCourt = selectedCourt
      ? caseItem.court === selectedCourt
      : true;
    const matchesParty = selectedParty
      ? caseItem.partyName === selectedParty
      : true;
    const matchesSearch = searchQuery
      ? caseItem.caseNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseItem.caseType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseItem.partyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseItem.court.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesCourt && matchesParty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0529] text-white">
      <Navbar />

      <main className="px-4 md:px-16 py-8">
        <div className="flex items-center mb-6">
          <Link to="/Dashboard">
            <div className="flex items-center md:ml-12">
              <ArrowLeft style={{ color: "white" }} />
              <h1 className="text-yellow-500 ml-4 font-bold text-3xl">
                All Case
              </h1>
            </div>
          </Link>
        </div>

        <div className="md:p-14">
          {/* Search and Filters  */}
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="flex space-x-0 md:space-x-4 w-full md:w-2/3 mb-4 md:mb-0 gap-6">
              {/* Court Filter */}
              <div className="w-80 md:w-1/3">
                <select
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-md"
                  value={selectedCourt}
                  onChange={(e) => setSelectedCourt(e.target.value)}
                >
                  <option value="">All Courts</option>
                  {courtNames.map((court, index) => (
                    <option key={index} value={court}>
                      {court}
                    </option>
                  ))}
                </select>
              </div>

              {/* Party Name Filter */}
              <div className="w-80 md:w-1/3">
                <select
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-md"
                  value={selectedParty}
                  onChange={(e) => setSelectedParty(e.target.value)}
                >
                  <option value="">All Parties</option>
                  {partyNames.map((party, index) => (
                    <option key={index} value={party}>
                      {party}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-1/4">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-800 text-white pl-4 pr-10 py-2 rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <Search size={20} />
              </div>
            </div>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-80">
            {filteredCases.map((caseItem) => (
              <Link
                key={caseItem.id}
                to={`/case/${caseItem.id}`}
                className="bg-[#2a2a5a] rounded-lg p-4 flex items-center hover:bg-[#3a3a7a] transition-colors cursor-pointer"
              >
                <div className="mr-4">
                  <Scale size={48} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-gray-300">
                    Case Number: {caseItem.caseNumber}
                  </p>
                  <p className="text-white font-semibold text-lg">
                    {caseItem.caseType}
                  </p>
                  <p className="text-gray-300">
                    Party Name: {caseItem.partyName}
                  </p>
                  <p className="text-gray-300 text-sm">
                    Court: {caseItem.court}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export default AllCases;
