import React, { useState } from "react";

function App() {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const [tableData, setTableData] = useState(initialData);

  // Sort by Date
  const handleSortByDate = () => {
    const sortedData = [...tableData].sort((a, b) => {
      const dateDiff = new Date(b.date) - new Date(a.date);

      if (dateDiff === 0) {
        return b.views - a.views;
      }

      return dateDiff;
    });

    setTableData(sortedData);
  };

  // Sort by Views
  const handleSortByViews = () => {
    const sortedData = [...tableData].sort((a, b) => {
      const viewsDiff = b.views - a.views;

      if (viewsDiff === 0) {
        return new Date(b.date) - new Date(a.date);
      }

      return viewsDiff;
    });

    setTableData(sortedData);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fb",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2d3748",
            marginBottom: "25px"
          }}
        >
          Date and Views Table
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "25px",
            flexWrap: "wrap"
          }}
        >
          <button
            onClick={handleSortByDate}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#dbeafe",
              color: "#1e3a8a",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Sort by Date
          </button>

          <button
            onClick={handleSortByViews}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#dcfce7",
              color: "#166534",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Sort by Views
          </button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              overflow: "hidden",
              borderRadius: "10px"
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#e0f2fe" }}>
                <th style={tableHeading}>Date</th>
                <th style={tableHeading}>Views</th>
                <th style={tableHeading}>Article</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "#ffffff" : "#f8fafc"
                  }}
                >
                  <td style={tableCell}>{item.date}</td>
                  <td style={tableCell}>{item.views}</td>
                  <td style={tableCell}>{item.article}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const tableHeading = {
  padding: "14px",
  textAlign: "left",
  color: "#1e293b",
  fontSize: "16px",
  borderBottom: "2px solid #cbd5e1"
};

const tableCell = {
  padding: "14px",
  borderBottom: "1px solid #e2e8f0",
  color: "#334155"
};

export default App;