import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContent: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    marginTop: 20,
  },
  form: {
    width: "100%",
    heigth: "auto",
  },
  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  ButtonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    backgroundColor: "#318f38",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 40,
    margin: 25,
  },
  textButtonCalculator: {
    fontsize: 20,
    color: "#ffffff",
  },
  errorMessage: {
    fontSize: 14,
    color: "green",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResultImc: {
    width: "100%",
    height: "50%",
  },
  listImc: {
    marginTop: 22,
  },
  resultImcItem: {
    fontSize: 24,
    color: "green",
    height: 50,
    width: "100%",
    paddingRight: 1,
  },
  textResultItemList: {
    fontSize: 19,
    color: "green",
  },
});

export default styles;
