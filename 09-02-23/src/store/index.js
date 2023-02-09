import { createContext } from "react";

const initialState = {
  noteList: [
    {
      id: 1,
      title: "titolo 1",
      done: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
    },
    {
      id: 2,
      title: "buongiorno",
      done: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
    },
    {
      id: 3,
      title: "eccolo ",
      content: " Error, quo?",
      done: false,
    },
    {
      id: 4,
      title: "title 4",
      content: "Lorem ipsu Error, quo?",
      done: true,
    },
  ],
};

const initialStateBackup = {
  noteList: [
    {
      id: 1,
      title: "titolo 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
      done: true,
    },
    {
      id: 2,
      title: "buongiorno",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quo?",
      done: true,
    },
    {
      id: 3,
      title: "eccolo ",
      content: " Error, quo?",
      done: false,
    },
    {
      id: 4,
      title: "title 4",
      content: "Lorem ipsu Error, quo?",
      done: true,
    },
  ],
};

const listContext = createContext(initialState);

export { initialState, listContext, initialStateBackup };
