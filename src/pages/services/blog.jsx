/* eslint-disable no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";
import CardBlog from "../../components/card_blog";
import { Card } from "antd";

const tabListNoTitle = [
  {
    key: "blog",
    label: "Blogs",
  },
  {
    key: "event",
    label: "Events",
  },
];

const contentListNoTitle = {
  blog: <CardBlog />,
  event: <p>event content</p>,
};

export default function BlogPage() {
  const [activeTabKey, setActiveTabKey] = useState("blog");
  const onTabChange = (key) => {
    setActiveTabKey(key);
  };
  return (
    <>
      <NavbarComponent />
      <div className="mt-10 pt-20 mx-auto">
        <p className="font-extrabold text-6xl text-center text-primary">Blogs and Events</p>
        <p className="font-normal text-center mt-5 text-gray-500 text-xl">Here at Smart Recycling a collection of the latest news from us.</p>
      </div>
      <div className="container mx-auto py-5 px-5 flex justify-evenly">
        <Card
          style={{
            width: "100%",
          }}
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey}
          // tabBarExtraContent={<a href="#">More</a>}
          onTabChange={onTabChange}
          tabProps={{
            size: "middle",
          }}
        >
          {contentListNoTitle[activeTabKey]}
        </Card>
      </div>
      <FooterComponent />
    </>
  );
}
