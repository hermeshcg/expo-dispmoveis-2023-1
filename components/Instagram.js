import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  Feather,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';
import Constants from 'expo-constants';
import data from '../utils/data';

const instagram_logo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png';

export default function Instagram() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="camera" size={24} />
        </TouchableOpacity>
        <Image source={{ uri: instagram_logo }} style={styles.logo} />
        <TouchableOpacity>
          <Feather name="send" size={24} />
        </TouchableOpacity>
      </View>
      {/* Posts */}
      <ScrollView style={styles.posts}>
        {data.map((post) => {
          return (
            <View key={post.id}>
              <View style={styles.postHeader}>
                <Image source={{ uri: post.avatar }} />
                <Text>{post.name}</Text>
              </View>
              <Image source={{ uri: post.image }} style={styles.imagePost} />
              <View></View>
            </View>
          );
        })}
      </ScrollView>
      <View styles={styles.footer}>
        <TouchableOpacity>
          <FontAwesome5 name="house-user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="black" />{' '}
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="post-add" size={24} color="black" />{' '}
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-circle" size={24} color="black" />{' '}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  logo: {
    flex: 1,
    height: 30,
    resizeMode: 'contain',
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItens: 'center',
    paddingHorizontal: 16,
    height: 44,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  footer: {
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItens: 'center',
    paddingHorizontal: 16,
    height: 44,
  },
});
