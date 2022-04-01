import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const login = (email: string, password: string) => {
    //Login exitoso
    setLoading(false);
    navigation.navigate('DrawerNavigation');
  };
};
