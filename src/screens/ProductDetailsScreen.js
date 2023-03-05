
import {
    View,
    Image,
    Text,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    Pressable,
    FlatList
} from "react-native";
import products from "../data/products";

const ProductDetailsScreen = () => {
    const addToCart = () => {
        console.warn('Add to cart');
    }
    const product = products[0];
    const { width } = useWindowDimensions();
    return (
        <>
            <ScrollView>
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <View>
                            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
                        </View>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />

                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.price}> ${product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>
            <Pressable style={styles.cartBtn} onPress={addToCart}>
                <Text style={styles.cartBtnText}> Add to Cart</Text>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 15,
    },
    title: {
        fontWeight: 600,
        fontSize: 20,
        letterSpacing: 4,
        marginBottom: 10,
    },
    price: {
        fontSize: 24,
        letterSpacing: 4,
        marginBottom: 20,
        color: "gray",
    },
    description: {
        fontSize: 18,
        lineHeight: 24,
    },
    cartBtn: {
        backgroundColor: "black",
        padding: 20,
        position: "absolute",
        bottom: '5%',
        alignSelf: "center",
        width: "90%",
        borderRadius: '50%',
        alignItems: "center"
    },
    cartBtnText: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 500

    }
});
export default ProductDetailsScreen;
