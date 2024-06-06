import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Andrew",
    lastName: "Defar",
    email: "contact@andrew.mit.edu",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSATIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transations={[]}
        banks={[{ currentBalance: 123.58 }, { currentBalance: 500.58 }]}
      />
    </section>
  );
};

export default Home;
