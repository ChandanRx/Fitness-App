import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodyPart } from '../api/exerciseDB'
import { demoExercises } from '../constants/Index'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons'
import ExercisesList from '../components/ExercisesList'
import { ScrollView } from 'react-native-virtualized-view'


const Exercises = () => {
    const router = useRouter()
    const item = useLocalSearchParams()
    const [exercises, setExercises] = useState([])
    // console.log('got data:', item);

    useEffect(() => {
      const getExercises = async (bodyPart) => {
          try {
              let data = await fetchExercisesByBodyPart(bodyPart);
              setExercises(data)
          } catch (error) {
              console.error('Error fetching exercises:', error);
          }
      };

      if (item && item.name) {
          getExercises(item.name);
      }
  }, [item]);

  return (
    <ScrollView>
      <StatusBar style='light'/>
      <Image 
        source={item.image}
        style={{width:wp(100),height:hp(45)}}
        className='rounded-b-[40px] '
      />
      <TouchableOpacity 
        onPress={()=>router.back()}
        className='bg-rose-500 mx-4 absolute pr-1 flex border border-gray-500 justify-center items-center rounded-full'
        style={{height:hp(5.5), width: hp(5.5), marginTop: hp(7)}}
        >
            <Ionicons name='caret-back-outline' size={hp(4)} color={'white'}/>
      </TouchableOpacity>

      {/* exercises */}

     <View className='mx-4 space-y-3 mt-4'>
       <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700'>
             {item.name} exercises
       </Text>
       <View className='mb-10'>
                <ExercisesList data={exercises}/>
       </View>
     </View>

    </ScrollView> 
  )
}

export default Exercises;