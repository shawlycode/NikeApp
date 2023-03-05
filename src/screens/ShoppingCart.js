import { FlatList, View } from "react-native";
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";



const ShoppingCart = () => {
    return (
        <FlatList
            data={cart}
            renderItem={({ item }) => (
                <CartListItem cartItem={item} />

            )}

            ListFooterComponent={() => {
                <View></View>
            }} />
    )
}

export default ShoppingCart;