import AsyncStorage from '@react-native-community/async-storage';

const DeviceStorage = {
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) {
            console.log(error);
        }
    },

    async getToken (){
        try {
            const value = await AsyncStorage.getItem('token');
        } catch (err) {
            console.log(err);
        }
    },

    async deleteItem () {
        try {
            AsyncStorage.clear();
        } catch (error) {
            console.log(error);
        }
    }
};

export default DeviceStorage;
