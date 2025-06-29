import styled from "styled-components/native";
import colors from "../colors";
import { Ionicons } from "@expo/vector-icons";

const View = styled.View`
  flex: 1;
  padding: 0px 50px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 38px;
  margin-bottom: 100px;
`;
const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
`;
const BtnText = styled.Text`
  color: white;
`;

const Home = ({ navigation: { navigate } }) => (
  <View>
    <Title>My Journal</Title>
    <Btn onPress={() => navigate("Write")}>
      <BtnText>
        <Ionicons name="add" color="withe" size={36} />
      </BtnText>
    </Btn>
  </View>
);

export default Home;
