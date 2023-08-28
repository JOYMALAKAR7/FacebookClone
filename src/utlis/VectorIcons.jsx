import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/dist/FontAwesome5Pro';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import FontAwesome6Pro from 'react-native-vector-icons/dist/FontAwesome6Pro';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Foundation from 'react-native-vector-icons/dist/Foundation';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/dist/Zocial';

const VectorIcons = (props) => {
    const {onPress,name,size,color,type,style} =props
  return (
    <View style={style}>
     {
        type==="FontAwesome" ? (
        <FontAwesome onPress={onPress} name={name} size={size} color={color} />
        ):type==="FontAwesome5" ?
        (<FontAwesome5 onPress={onPress} name={name} size={size} color={color} />
        ) : type==="FontAwesome5Pro" ?
        (<FontAwesome5Pro onPress={onPress} name={name} size={size} color={color} />
        ): type==="FontAwesome6" ?
        (<FontAwesome6 onPress={onPress} name={name} size={size} color={color} />
        ): type==="FontAwesome6Pro" ?
        (<FontAwesome6Pro onPress={onPress} name={name} size={size} color={color} />
        )
        : type==="AntDesign" ?
        (<AntDesign onPress={onPress} name={name} size={size} color={color} />
        )
        : type==="Entypo" ?
        (<Entypo onPress={onPress} name={name} size={size} color={color} />
        )
        : type==="EvilIcons" ?
        (<EvilIcons onPress={onPress} name={name} size={size} color={color} />
        )
        : type==="Feather" ?
        (<Feather onPress={onPress} name={name} size={size} color={color} />
        )
        : type==="Fontisto" ?
        (<Fontisto onPress={onPress} name={name} size={size} color={color} />
        )
        : type==="Foundation" ?
        (<Foundation onPress={onPress} name={name} size={size} color={color} />
        )
        : type==="Ionicons" ?
        (<Ionicons onPress={onPress} name={name} size={size} color={color} />
        )
        : type==="MaterialCommunityIcons" ?
        (<MaterialCommunityIcons onPress={onPress} name={name} size={size} color={color} />
        )
        : type==="MaterialIcons" ?
        (<MaterialIcons onPress={onPress} name={name} size={size} color={color} />
        )
        : type==="Octicons" ?
        (<Octicons onPress={onPress} name={name} size={size} color={color} />
        )
    
        : type==="SimpleLineIcons" ?
        (<SimpleLineIcons onPress={onPress} name={name} size={size} color={color} />
        )

        :
        (
            <Zocial onPress={onPress} name={name} size={size} color={color} />
        )


        
     }
    </View>
  )
}

export default VectorIcons