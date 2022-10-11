import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import CountersBar from "../../components/CountersBar";
import EmptyTaskList from "../../components/EmptyTaskList";
import Task from "../../components/Task";

import styles from "./styles";
import colors from "../../../assets/styles/styles";

type Task = {
  id: number;
  text: string;
  checked: boolean;
};

const initialState: {
  tasks: Task[];
  inputContent: string;
  idCounter: number;
  tasksCreated: number;
  tasksFinished: number;
} = {
  tasks: [],
  inputContent: "",
  idCounter: 3,
  tasksCreated: 0,
  tasksFinished: 0,
};

export default () => {
  const [tasks, setTasks] = useState(initialState.tasks);
  const [inputContent, setInputContent] = useState(initialState.inputContent);
  const [idCounter, setIdCounter] = useState(initialState.idCounter);
  const [tasksCreated, setTasksCreated] = useState(initialState.tasksCreated);
  const [tasksFinished, setTasksFinished] = useState(
    initialState.tasksFinished
  );

  useEffect(() => {
    UpdateCreatedTasks();
    UpdateFinishedTasks();
  });

  const handleTaskAdd = () => {
    setTasks([{ id: idCounter, text: inputContent, checked: false }, ...tasks]);
    setInputContent("");
    setIdCounter(idCounter + 1);
    UpdateCreatedTasks();
    UpdateFinishedTasks();
  };

  const handleTaskRemove = (task: Task) => {
    setTasks(tasks.filter((t: Task) => t.id != task.id));
    UpdateCreatedTasks();
    UpdateFinishedTasks();
  };

  const handleToggleCheckbox = (task: Task) => {
    setTasks(
      tasks.map((t: Task) => {
        if (t.id == task.id) {
          t.checked = !t.checked;
          return t;
        }
        return t;
      })
    );
    UpdateCreatedTasks();
    UpdateFinishedTasks();
  };

  const UpdateCreatedTasks = () => {
    setTasksCreated(tasks.length);
  };

  const UpdateFinishedTasks = () => {
    setTasksFinished(tasks.filter((task: Task) => task.checked).length);
  };

  return (
    <>
      <View style={styles.background1}></View>
      <View style={styles.background2}></View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../../../assets/images/logo.png")}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray300}
            onChangeText={(text) => {
              setInputContent(text);
            }}
            value={inputContent}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleTaskAdd();
            }}
          >
            <Image
              style={styles.buttonContent}
              source={require("../../../assets/images/add.png")}
            />
          </TouchableOpacity>
        </View>
        <CountersBar
          tasksCreated={tasksCreated}
          tasksFinished={tasksFinished}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Task
                key={item.id}
                text={item.text}
                checked={item.checked}
                onRemove={() => handleTaskRemove(item)}
                onToggleCheckbox={() => handleToggleCheckbox(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <EmptyTaskList />}
          />
        </View>
      </View>
    </>
  );
};
