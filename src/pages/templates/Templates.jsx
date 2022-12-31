import React from "react";
import PageTitle from "../../components/PageTitle";
import Footer from "../../components/Footer";
import template1 from "../../assets/images/template_1.png";
import template2 from "../../assets/images/template_2.png";

const Templates = () => {
  document.title = "Invoice Templates | Nutz Invoice";

  let templates = [
    {
      name: "Template 1",
      img: template1,
      category: "basic",
    },
    {
      name: "Template 2",
      img: template2,
      category: "basic",
    },
  ];

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <PageTitle title={"Templates"} pb={0} mb={"10px"} />
          <div className="row mt-4">
            {templates.map((v) => {
              return (
                <div className="col-lg-3 text-center">
                  <img
                    src={v.img}
                    alt="invoice template"
                    height={"250px"}
                    width={"auto"}
                    style={{
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                  <h4>{v.name}</h4>
                  <p>{v.category}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Templates;
