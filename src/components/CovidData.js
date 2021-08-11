import { useEffect, useState } from "react";

const CovidData = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const resopnse = await fetch(
        "https://corona.lmao.ninja/v3/covid-19/jhucsse"
      );
      const responseData = await resopnse.json();
      const cases = [];
      for (const key in responseData) {
        // India
        cases.push({
          id: key,
          country: responseData[key].country,
          state: responseData[key].province,
          total: responseData[key].stats.confirmed,
          deaths: responseData[key].stats.deaths,
          Recovered: responseData[key].stats.recovered,
          date: responseData[key].updatedAt,
        });
      }

      setData(cases);
    };
    fetchMeals();
  }, []);

  const lists = data.map((d) => (
    <div key={d.id}>
      <h6>NO. {d.id}</h6>
      <h1>country: {d.country}</h1>
      <h4>Date: {d.date}</h4>
      <h2>state: {d.state}</h2>
      <h3>total: {d.total}</h3>
      <h4>deaths: {d.deaths}</h4>
      <h5>recovered: {d.Recovered}</h5>
    </div>
  ));
  return <ul>{lists}</ul>;
};

export default CovidData;
