import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import {
  Button,
  Card,
  Input,
  Typography,
} from "@/components/ui";

import {
  useTheme,
} from "@/theme";


export default function UIPreview() {

  const {
    theme,
    toggleTheme,
  } = useTheme();


  return (

    <ScrollView

      contentContainerStyle={[
        styles.container,
        {
          backgroundColor:
            theme.colors.background,
        },
      ]}

    >


      {/* Theme Toggle */}

      <Button

        title={
          theme.dark
            ? "Switch To Light Mode"
            : "Switch To Dark Mode"
        }

        onPress={toggleTheme}

      />



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
      />



      <View style={styles.space} />



      <Button

        title="Secondary Button"

        variant="secondary"

      />



      <View style={styles.space} />



      <Button

        title="Outline Button"

        variant="outline"

      />




      <View style={styles.space} />



      <Button

        title="Ghost Button"

        variant="ghost"

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



        <View style={styles.space} />



        <Button

          title="View Product"

        />


      </Card>





      {/* Product Card Preview */}


      <Typography variant="heading">

        Product Card Preview

      </Typography>




      <Card>



        <View

          style={[
            styles.imagePlaceholder,
            {
              backgroundColor:
                theme.colors.surface,
            }
          ]}

        />



        <Typography variant="heading">

          Velvet Sofa

        </Typography>



        <Typography>

          ₹45,999

        </Typography>



        <View style={styles.space} />



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
                theme.colors.primary,
            }
          ]}

        />



        <View

          style={[
            styles.colorBox,
            {
              backgroundColor:
                theme.colors.secondary,
            }
          ]}

        />



        <View

          style={[
            styles.colorBox,
            {
              backgroundColor:
                theme.colors.success,
            }
          ]}

        />



        <View

          style={[
            styles.colorBox,
            {
              backgroundColor:
                theme.colors.danger,
            }
          ]}

        />


      </View>



    </ScrollView>

  );

}





const styles = StyleSheet.create({

  container: {

    padding: 20,

    gap: 16,

  },


  space: {

    height: 12,

  },


  imagePlaceholder: {

    height: 150,

    borderRadius: 16,

    marginBottom: 16,

  },


  colorRow: {

    flexDirection: "row",

    gap: 12,

    flexWrap: "wrap",

  },


  colorBox: {

    width: 60,

    height: 60,

    borderRadius: 12,

  },


});