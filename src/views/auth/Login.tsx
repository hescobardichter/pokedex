import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Alert,
  ImageBackground,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import SubmitButton from '../../components/button/Submit';
import TextField from '../../components/input/Text';

const dimension = Dimensions.get('window');

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    setLoading(true);
    if (email === '' || password === '') {
      Alert.alert('Login', 'Ingrese email o password');
      setLoading(false);
      return;
    }
    navigation.navigate('DrawerNavigation');
    setLoading(false);
  };

  return (
    <Grid>
      <Row style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Ingresa</Text>
          <TextField
            placeholder="Email"
            setValue={setEmail}
            value={email}
            secureTextEntry={false}
          />
          <TextField
            placeholder="Password"
            setValue={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <SubmitButton
            loading={loading}
            text={'Entrar'}
            handleSubmit={handleLogin}
          />
        </View>
      </Row>
    </Grid>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    width: dimension.width,
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  formContainer: {
    padding: 40,
    width: '100%',
    height: dimension.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
