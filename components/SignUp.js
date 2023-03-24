import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextInput } from 'react-native-paper';

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
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
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
