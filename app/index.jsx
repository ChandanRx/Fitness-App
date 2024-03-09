import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';


const index = () => {
  const router = useRouter();
  return (
    <View className='flex-1 flex justify-end'>
      <StatusBar style='light'/>
      <Image className='h-full w-full absolute' source={require("../assets/images/home.jpg")}/>
      <LinearGradient
         colors={['transparent','#18181b']}
         style={{width: wp(100), height:hp(70)}}
         start={{x:0.5,y:1}}
         end={{x:0.5,y:2}}
         className='flex justify-end pb-12 space-y-8'
      />
      <Animated.View
             entering={FadeInDown.delay(100).springify()}
             className='flex items-center'>
         <Text style={{fontSize:hp(5)}} className='text-white font-bold tracking-wide'>
          Best <Text className='text-red-700'> Workouts </Text>
         </Text>
         <Text style={{fontSize:hp(5)}} className='text-white font-bold tracking-wide'>
          For you
         </Text>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(200).springify()}>
        <TouchableOpacity
            onPress={()=>router.push('Home')}
            style={{height:hp(7),width:wp(80)}}
            className='bg-rose-700 mt-4 flex items-center justify-center mx-auto rounded-full border-[2px] border-gray-600'
        >
          <Text style={{fontSize:hp(3)}} className='text-white fonr-bold tracking-widest'>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default index;