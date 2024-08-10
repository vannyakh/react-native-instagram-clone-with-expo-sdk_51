import { StyleSheet } from "react-native";

export const GlobleStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    maxWidth: 600,
    marginHorizontal: "auto",
    width: "100%",
  },
  headerTop: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  folloBtn: {
    fontSize: 14,
    fontWeight: "500",
  },
  story: {
    width: 58,
    height: 58,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  myProfile: {
    width: 90,
    height: 90,
  },
  imagePost: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
});
