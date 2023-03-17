import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function SignUp() {
  function onSubmitHandler(values, actions) {
    console.log(values);
  }

  return (
    <>
      <SafeAreaView style={styles.topSafeArea}>
        <StatusBar style="light" />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Sign up</Text>
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
                showVerticalScrollIndicator={false}
              ></KeyboardAwareScrollView>
            )}
          </Formik>
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
    backgroundColor: '#3498db',
    height: '100vh',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3498db',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItemss: 'center',
    backgroundColor: '#3498db',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
});

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .required()
    .min(6, 'Password must have at least 6 characters'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Password must have at least 6 characters'
  ),
});
