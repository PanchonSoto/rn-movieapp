import { View, Text } from 'react-native';
import { FullMovie } from '../../../core/models/movie.model';
import { Formatter } from '../../../config/helpers/formatter';
import { FlatList } from 'react-native-gesture-handler';
import { Cast } from '../../../core/models/cast.entity';
import { CastActor } from '../cast/CastActor';


interface Props {
    movie: FullMovie;
    cast: Cast[];
}

export const MovieDetails = ({movie, cast}:Props) => {
  return (
    <>
        <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Text>{movie.rating}</Text>
                <Text style={{marginLeft:5}}>
                    - { movie.genres.join(', ') }
                </Text>
            </View>

            <Text style={{fontSize:23, marginTop:10, fontWeight:'bold'}}>
                Historia
            </Text>
            <Text style={{fontSize:16}}>{movie.description}</Text>
            <Text style={{fontSize:23, marginTop:10, fontWeight: 'bold'}}>
                Presupuesto
            </Text>
            <Text style={{fontSize:18}}>{Formatter.currency(movie.budget)}</Text>

            <View style={{marginTop:10}}>
                <Text style={{fontSize:23, marginVertical:10, fontWeight: 'bold', marginHorizontal: 20}}>
                    Actores
                </Text>
                <FlatList 
                    data={cast}
                    keyExtractor={(item=>item.id.toString())}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    renderItem={({item})=><CastActor actor={item}/>}
                />
            </View>
        </View>
    </>
  )
}

