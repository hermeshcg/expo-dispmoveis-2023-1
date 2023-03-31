import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Formik } from 'formik';
import { validationSchema } from './validation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ErrorMessage = ({ errorValue }) => {
  return errorValue ? (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}> {errorValue} </Text>
    </View>
  ) : null;
};
export default function SignUp() {
  function onSubmitHandler(values) {
    console.log(values);
  }
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Sign Up </Text>
        </View>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values, actions) => {
            onSubmitHandler(values, actions);
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            values,
            errors,
            touched,
            handleSubmit,
            handleBlur,
          }) => (
            <KeyboardAwareScrollView
              style={styles.content}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.formGroup}>
                <Text style={styles.label}> First Name</Text>
                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                />
                <ErrorMessage
                  errorValue={touched.firstName && errors.firstName}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}> Last Name</Text>
                <TextInput
                  style={styles.input}
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}> Email Address</Text>
                <TextInput
                  style={styles.input}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <ErrorMessage errorValue={touched.email && errors.email} />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}> Password</Text>
                <TextInput
                  style={styles.input}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <ErrorMessage
                  errorValue={touched.password && errors.password}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}> Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />
                <ErrorMessage
                  errorValue={touched.confirmPassword && errors.confirmPassword}
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}> SUBMIT </Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: '#ff7675',
  },
  formGroup: {
    marginTop: 10,
  },
  label: {
    color: '#7d7e79',
    fontSize: 16,
    lineHeight: 30,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#e3e3e3',
    backgroundColor: '#fff',
  },
  topSafeArea: {
    backgroundColor: '#3498db',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3498db',
  },
  header: {
    height: 60,
    justifyContent: 'center', // vertical
    alignItems: 'center', // horizontal
    backgroundColor: '#3498db',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  content: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
});
