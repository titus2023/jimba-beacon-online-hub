
import React from "react";
import Layout from "@/components/layout/Layout";
import StaffHero from "@/components/staff/StaffHero";
import StaffCategories from "@/components/staff/StaffCategories";
import StaffCTA from "@/components/staff/StaffCTA";

const Staff = () => {
  return (
    <Layout>
      <StaffHero />
      <div className="container-custom py-12 md:py-16">
        <StaffCategories />
      </div>
      <StaffCTA />
    </Layout>
  );
};

export default Staff;
