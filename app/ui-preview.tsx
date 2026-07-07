import {
    ScrollView,
    StyleSheet,
    View
} from "react-native";

import {
    Button,
    Card,
    Input,
    Typography,
} from "@/components/ui";

import { Colors } from "@/theme/colors";


export default function UIPreview() {

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
    >

      {/* Typography */}
      <Typography variant="display">
        Sofa Gallery
      </Typography>

      <Typography variant="title">
        Premium Furniture
      </Typography>

      <Typography variant="heading">
        Living Room Collection
      </Typography>

      <Typography variant="body">
        Modern sofas designed for your home.
      </Typography>

      <Typography variant="caption">
        Free delivery available
      </Typography>



      {/* Buttons */}

      <Typography variant="heading">
        Buttons
      </Typography>


      <Button
        title="Primary Button"
        onPress={()=>{}}
      />


      <View style={styles.space}/>


      <Button
        title="Secondary Button"
        variant="secondary"
      />


      <View style={styles.space}/>


      <Button
        title="Outline Button"
        variant="outline"
      />



      {/* Inputs */}

      <Typography variant="heading">
        Inputs
      </Typography>


      <Input
        label="Email"
        placeholder="Enter email"
      />


      <Input
        label="Password"
        placeholder="Enter password"
        secureTextEntry
      />


      <Input
        label="Search Product"
        placeholder="Search sofa..."
      />



      {/* Card */}

      <Typography variant="heading">
        Card
      </Typography>


      <Card>

        <Typography variant="title">
          Luxury Sofa
        </Typography>


        <Typography>
          Premium leather sofa with modern design.
        </Typography>


        <View style={styles.space}/>


        <Button
          title="View Product"
        />

      </Card>



      {/* Product Example */}

      <Typography variant="heading">
        Product Card Preview
      </Typography>


      <Card>


        <View style={styles.imagePlaceholder}/>


        <Typography variant="heading">
          Velvet Sofa
        </Typography>


        <Typography>
          ₹45,999
        </Typography>


        <View style={styles.space}/>


        <Button
          title="Add To Cart"
        />

      </Card>



      {/* Colors */}

      <Typography variant="heading">
        Colors
      </Typography>


      <View style={styles.colorRow}>


        <View 
          style={[
            styles.colorBox,
            {
              backgroundColor:
              Colors.primary
            }
          ]}
        />


        <View 
          style={[
            styles.colorBox,
            {
              backgroundColor:
              Colors.secondary
            }
          ]}
        />


        <View 
          style={[
            styles.colorBox,
            {
              backgroundColor:
              Colors.success
            }
          ]}
        />

      </View>


    </ScrollView>
  );
}



const styles = StyleSheet.create({

  container:{
    padding:20,
    gap:16,
    backgroundColor:"#fff"
  },


  space:{
    height:12
  },


  imagePlaceholder:{
    height:150,
    borderRadius:16,
    backgroundColor:"#eee",
    marginBottom:16
  },


  colorRow:{
    flexDirection:"row",
    gap:12
  },


  colorBox:{
    width:60,
    height:60,
    borderRadius:12
  }

});