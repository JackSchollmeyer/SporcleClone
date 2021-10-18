import React from "react";
import { useTable } from "react-table";
import { PencilIcon, UserRemoveIcon } from "@heroicons/react/outline";
import s from "../../styles/Quizzes.module.css";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className={s.tableContainer}>
      <div className={s.tableCard}>
        <table {...getTableProps()} className={s.table}>
          {" "}
          <thead className={s.headers}>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className={s.tableTh}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}{" "}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className={s.tableTd}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function index() {
  const data = React.useMemo(
    () => [
      {
        id: 1,
        name: "Wilda Barton",
        username: "Etazyni",
        createDate: "5/7/2015",
      },
      {
        id: 2,
        name: "Claudine Dickerson",
        username: "The Blue Starling",
        createDate: "8/2/2021",
      },
      {
        id: 3,
        name: "Sylvester Kaufman",
        username: "Dhutorn",
        createDate: "9/21/2018",
      },
      {
        id: 4,
        name: "Royal Gallagher",
        username: "The Elegant Spectacle",
        createDate: "1/29/2019",
      },
      {
        id: 5,
        name: "Jasper Bean",
        username: "Arihann",
        createDate: "8/25/2017",
      },
      {
        id: 6,
        name: "Andres Graves",
        username: "Elizahne",
        createDate: "11/3/2020",
      },
      {
        id: 7,
        name: "Miranda Morris",
        username: "Aqia",
        createDate: "4/21/2015",
      },
      {
        id: 8,
        name: "Sol Fritz",
        username: "The Fast Shaman",
        createDate: "4/24/2021",
      },
      {
        id: 9,
        name: "Beatrice Cervantes",
        username: "Anixar",
        createDate: "12/27/2018",
      },
      {
        id: 10,
        name: "Barbara Goodman",
        username: "Omonar",
        createDate: "9/11/2018",
      },
      {
        id: 11,
        name: "Porfirio Heath",
        username: "Deadnite",
        createDate: "8/1/2019",
      },
      {
        id: 12,
        name: "Darrell Williamson",
        username: "Etrix",
        createDate: "8/4/2020",
      },
      {
        id: 13,
        name: "Mike Hanson",
        username: "Venombite",
        createDate: "3/20/2020",
      },
      {
        id: 14,
        name: "Adolfo Preston",
        username: "Erugast",
        createDate: "12/22/2017",
      },
      {
        id: 15,
        name: "Reed Cantrell",
        username: "Ozith",
        createDate: "12/9/2015",
      },
      {
        id: 16,
        name: "Toni Rosario",
        username: "Ugrusorin",
        createDate: "11/8/2016",
      },
      {
        id: 17,
        name: "Roxie Gates",
        username: "Rimonar",
        createDate: "4/3/2017",
      },
      {
        id: 18,
        name: "Sean Pruitt",
        username: "Uphixone",
        createDate: "12/27/2016",
      },
      {
        id: 19,
        name: "Parker Beard",
        username: "Idalf",
        createDate: "7/19/2017",
      },
      {
        id: 20,
        name: "Marc Curtis",
        username: "The Red Antman",
        createDate: "10/3/2021",
      },
      {
        id: 21,
        name: "Ben Bridges",
        username: "Captain Fabulous Mothman",
        createDate: "2/24/2016",
      },
      {
        id: 22,
        name: "Garry Cook",
        username: "Quick Monarch",
        createDate: "12/25/2020",
      },
      {
        id: 23,
        name: "Lana Cowan",
        username: "Agent Outrageous Elephantman",
        createDate: "8/24/2019",
      },
      {
        id: 24,
        name: "Bessie Warner",
        username: "The Magnificent Trident",
        createDate: "12/17/2019",
      },
      {
        id: 25,
        name: "Dean Zimmerman",
        username: "Ivior",
        createDate: "1/24/2017",
      },
      {
        id: "",
        name: "Lanny Kane",
        username: "Ejahr",
        createDate: "1/3/2018",
      },
      {
        id: 27,
        name: "Rory Booker",
        username: "Shikore",
        createDate: "11/16/2017",
      },
      {
        id: 28,
        name: "Dawn Cherry",
        username: "The Electric Gladiator",
        createDate: "12/21/2020",
      },
      {
        id: 29,
        name: "Ramona Gonzales",
        username: "Udyrin",
        createDate: "6/7/2015",
      },
      {
        id: 30,
        name: "Marla Ball",
        username: "Inubelle",
        createDate: "8/30/2015",
      },
      {
        id: 31,
        name: "Ezra Estes",
        username: "Ozonaxis",
        createDate: "3/24/2016",
      },
      {
        id: 32,
        name: "Glen Marks",
        username: "Rosethorn",
        createDate: "12/31/2019",
      },
      {
        id: 33,
        name: "Kasey Calderon",
        username: "The Quiet Starling",
        createDate: "3/30/2020",
      },
      {
        id: 34,
        name: "Graham Mcknight",
        username: "Spur",
        createDate: "8/10/2016",
      },
      {
        id: 35,
        name: "Jefferey Richards",
        username: "Pherihann",
        createDate: "11/6/2015",
      },
      {
        id: 36,
        name: "Rochelle Tanner",
        username: "Vrixar",
        createDate: "5/4/2015",
      },
      {
        id: 37,
        name: "Ana Turner",
        username: "Efaris",
        createDate: "1/24/2020",
      },
      {
        id: 38,
        name: "Vonda Sanford",
        username: "The Macho Mothman",
        createDate: "7/17/2017",
      },
      {
        id: 39,
        name: "Shirley Hendricks",
        username: "The Purple Killer",
        createDate: "4/11/2016",
      },
      {
        id: 40,
        name: "Ann Stephenson",
        username: "The Fast Antman",
        createDate: "10/15/2016",
      },
      {
        id: 41,
        name: "Henry Meadows",
        username: "Emaev",
        createDate: "2/2/2016",
      },
      {
        id: 42,
        name: "Bennett Evans",
        username: "Thivira",
        createDate: "10/14/2015",
      },
      {
        id: 43,
        name: "Lee Baxter",
        username: "Master Brave Robin",
        createDate: "10/31/2015",
      },
      {
        id: 44,
        name: "Murray Hart",
        username: "Elemental",
        createDate: "11/26/2019",
      },
      {
        id: 45,
        name: "Herman Pennington",
        username: "Jixon",
        createDate: "5/23/2019",
      },
      {
        id: 46,
        name: "Don Frost",
        username: "Uxeor",
        createDate: "11/15/2015",
      },
      {
        id: 47,
        name: "Verna Bush",
        username: "Elabaris",
        createDate: "5/26/2018",
      },
      {
        id: 48,
        name: "Katelyn Curry",
        username: "Earth Moth",
        createDate: "4/27/2019",
      },
      {
        id: 49,
        name: "Louisa Jones",
        username: "The Broad Whiz",
        createDate: "9/19/2019",
      },
      {
        id: 50,
        name: "Jake Castillo",
        username: "Swift Conjurer",
        createDate: "8/3/2017",
      },
      {
        id: 51,
        name: "Ricardo Peterson",
        username: "Elemental",
        createDate: "10/16/2016",
      },
      {
        id: 52,
        name: "Devon Robbins",
        username: "Fiery Oxman",
        createDate: "5/7/2017",
      },
      {
        id: 53,
        name: "Bernadette Hardin",
        username: "Ukely",
        createDate: "11/9/2015",
      },
      {
        id: 54,
        name: "Chance Fletcher",
        username: "Eager Rhinoceros",
        createDate: "11/15/2016",
      },
      {
        id: 55,
        name: "Carmella Christian",
        username: "Azith",
        createDate: "9/24/2018",
      },
      {
        id: 56,
        name: "Samuel Goodwin",
        username: "Waxeor",
        createDate: "10/13/2021",
      },
      {
        id: 57,
        name: "Angel Mcdonald",
        username: "Evukius",
        createDate: "5/31/2016",
      },
      {
        id: 58,
        name: "Elaine Luna",
        username: "Amaphyx",
        createDate: "10/5/2015",
      },
      {
        id: 59,
        name: "Randal Valencia",
        username: "The Wacky Raven",
        createDate: "12/22/2021",
      },
      {
        id: 60,
        name: "Ashlee Middleton",
        username: "Ihovile",
        createDate: "4/2/2019",
      },
      {
        id: 61,
        name: "Carolina Stuart",
        username: "Etrixi",
        createDate: "12/27/2018",
      },
      {
        id: 62,
        name: "Stewart Gardner",
        username: "Iriprix",
        createDate: "6/18/2015",
      },
      {
        id: 63,
        name: "Ralph Nunez",
        username: "Nuclear Hornet",
        createDate: "10/5/2016",
      },
      {
        id: 64,
        name: "Sheri Mccall",
        username: "Nawaelle",
        createDate: "11/21/2018",
      },
      {
        id: 65,
        name: "Ulysses Blake",
        username: "The Mysterious Charmer",
        createDate: "9/2/2016",
      },
      {
        id: 66,
        name: "Rosendo Gamble",
        username: "Niphi",
        createDate: "6/14/2019",
      },
      {
        id: 67,
        name: "Melissa Bender",
        username: "The Misty Vulture",
        createDate: "9/7/2015",
      },
      {
        id: 68,
        name: "Miquel Harvey",
        username: "The Bronze Watcher",
        createDate: "8/3/2019",
      },
      {
        id: 69,
        name: "Letha Davis",
        username: "Omexaryl",
        createDate: "12/31/2018",
      },
      {
        id: 70,
        name: "Kenneth Owen",
        username: "The Lucky Grasshopper",
        createDate: "7/29/2021",
      },
      {
        id: 71,
        name: "Chandra Heath",
        username: "Kuqor",
        createDate: "11/23/2017",
      },
      {
        id: 72,
        name: "Priscilla Dougherty",
        username: "Adrisse",
        createDate: "1/12/2021",
      },
      {
        id: 73,
        name: "Tamra Schultz",
        username: "Abis",
        createDate: "6/27/2018",
      },
      {
        id: 74,
        name: "Sydney Vega",
        username: "Deadnite",
        createDate: "10/27/2021",
      },
      {
        id: 75,
        name: "Chelsea Mckenzie",
        username: "The Hypnotic Catman",
        createDate: "9/19/2020",
      },
      {
        id: 76,
        name: "Bettie Krause",
        username: "Water Starling",
        createDate: "10/3/2020",
      },
      {
        id: 77,
        name: "Sam Jennings",
        username: "The Blue Raven",
        createDate: "5/17/2016",
      },
      {
        id: 78,
        name: "Lamar Warner",
        username: "Doctor Golden Champion",
        createDate: "6/16/2019",
      },
      {
        id: 79,
        name: "Shelly Kirk",
        username: "The Thunder Ant",
        createDate: "6/5/2020",
      },

      {
        id: 80,
        name: "Lenore Armstrong",
        username: "Unatrix",
        createDate: "1/25/2016",
      },
      {
        id: 81,
        name: "Glenna Lane",
        username: "Mister Spectacular Phoenix",
        createDate: "6/28/2017",
      },
      {
        id: 82,
        name: "Vern Mcclure",
        username: "Chief Fearless Vulture",
        createDate: "12/21/2018",
      },
      {
        id: 83,
        name: "Brain Ramsey",
        username: "The Broad Whiz",
        createDate: "10/8/2021",
      },
      {
        id: 84,
        name: "Rolando Lozano",
        username: "The Galactic Shield",
        createDate: "7/18/2017",
      },
      {
        id: 85,
        name: "Janell Blackwell",
        username: "Ofeus",
        createDate: "6/27/2017",
      },
      {
        id: 86,
        name: "Colette Long",
        username: "Imaev",
        createDate: "3/13/2020",
      },
      {
        id: 87,
        name: "Rodolfo Mata",
        username: "Frivira",
        createDate: "6/23/2015",
      },
      {
        id: 88,
        name: "Palmer Adkins",
        username: "The Red Raven",
        createDate: "2/26/2017",
      },
      {
        id: 89,
        name: "Jewell Moran",
        username: "Ogumonar",
        createDate: "11/12/2017",
      },
      {
        id: 90,
        name: "Dan Solomon",
        username: "The Swift Spy",
        createDate: "4/11/2021",
      },
      {
        id: 91,
        name: "Arturo Sloan",
        username: "Aneharad",
        createDate: "7/4/2019",
      },
      {
        id: 92,
        name: "Geoffrey Crane",
        username: "Mister X",
        createDate: "12/12/2021",
      },
      {
        id: 93,
        name: "Emil Church",
        username: "The Honorable Whiz",
        createDate: "4/14/2017",
      },
      {
        id: 94,
        name: "Earnestine Bray",
        username: "Master Black Starling",
        createDate: "10/2/2019",
      },
      {
        id: 95,
        name: "Coleman Carter",
        username: "Professor Red Falcon",
        createDate: "9/20/2021",
      },
      {
        id: 96,
        name: "Whitney Jensen",
        username: "Thefaris",
        createDate: "9/15/2021",
      },
      {
        id: 97,
        name: "Dee Lawrence",
        username: "Adyrin",
        createDate: "6/2/2015",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: (props) => {
          return <div className={s.tableTdNames}>{props.name}</div>;
        },
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "CreateDate",
        accessor: "createDate",
      },
      {
        Header: " ",
        accessor: () => {
          return (
            <div className={s.iconContainer}>
              <UserRemoveIcon className={s.userRemoveIcon} />
              <PencilIcon className={s.pencilIcon} />
            </div>
          );
        },
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
}
