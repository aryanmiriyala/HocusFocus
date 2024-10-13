import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, TextInput } from 'react-native';
import BottomBar from './BottomBar'; // Adjust the path accordingly
import Icon from 'react-native-vector-icons/FontAwesome';
import SwitchSelector from 'react-native-switch-selector';

const ShopScreen = ({ navigation }) => {
    const [focusMode, setFocusMode] = useState("Easy");
    const [points, setPoints] = useState(3.8); // Example initial points value
    const [selectedBook, setSelectedBook] = useState(null); // Track selected book for the modal
    const [isModalVisible, setIsModalVisible] = useState(false); // Track if modal is visible
    const [isDonateModalVisible, setIsDonateModalVisible] = useState(false); // Track if donation modal is visible
    const [selectedInstitution, setSelectedInstitution] = useState(null); // Track selected charity
    const [donationAmount, setDonationAmount] = useState(''); // Track the donation amount
    const [isDonationAmountModalVisible, setIsDonationAmountModalVisible] = useState(false); // Track if donation amount modal is visible
    const [treesToDonate, setTreesToDonate] = useState(''); // Track the number of trees to donate
    const [isTreeDonationModalVisible, setIsTreeDonationModalVisible] = useState(false); // Track if tree donation modal is visible

    const toggleSwitch = (value) => {
        setFocusMode(value);
    };

    const handleBuyBook = (book) => {
        setSelectedBook(book);
        setIsModalVisible(true); // Show the modal
    };

    const handleDonateToCharity = () => {
        setIsDonateModalVisible(true); // Show the donation modal
    };

    const confirmDonation = (institution) => {
        setSelectedInstitution(institution);
        setIsDonateModalVisible(false); // Close the donation modal
        setIsDonationAmountModalVisible(true); // Show the donation amount modal
    };

    const handleDonation = () => {
        const donation = parseFloat(donationAmount);
        if (donation > points) {
            console.log('Not enough points to donate this amount.');
            return;
        }
        setPoints(points - donation); // Deduct points
        console.log(`Donated ${donation} points to ${selectedInstitution}`);
        setDonationAmount(''); // Reset donation amount
        setIsDonationAmountModalVisible(false); // Close donation amount modal
    };

    const handlePlantTrees = () => {
        setIsTreeDonationModalVisible(true); // Show the tree donation modal
    };

    const confirmTreeDonation = () => {
        const trees = parseInt(treesToDonate);
        if (trees > points) {
            console.log('Not enough points to donate this amount of trees.');
            return;
        }
        setPoints(points - trees); // Deduct points for the trees donated
        console.log(`Donated ${trees} trees (points)`);
        setTreesToDonate(''); // Reset tree donation input
        setIsTreeDonationModalVisible(false); // Close tree donation modal
    };

    const charitableInstitutions = [
        { name: 'World Wildlife Fund (WWF)' },
        { name: 'Doctors Without Borders' },
        { name: 'Red Cross' },
    ];

    const confirmPurchase = () => {
        const bookPrice = parseFloat(selectedBook.price.split(' ')[0]); // Extract the numeric price from the book price string
        if (points >= bookPrice) {
            setPoints(points - bookPrice); // Deduct points
            console.log(`Purchased: ${selectedBook.title}`);
        } else {
            console.log('Not enough points to purchase this book.');
        }
        setIsModalVisible(false); // Close the modal
    };

    const cancelPurchase = () => {
        setIsModalVisible(false); // Just close the modal without any changes
    };

    const books = [
        { title: 'The Great Gatsby', price: '1.2 points', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/845px-The_Great_Gatsby_Cover_1925_Retouched.jpg' },
        { title: '1984', price: '1.5 points', image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327144697i/3744438.jpg' },
        { title: 'To Kill a Mockingbird', price: '1.8 points', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1024px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg' },
    ];

    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topContainer}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => console.log('Settings pressed')}>
                        <Icon name="cog" size={30} color="#000" />
                    </TouchableOpacity>
                    <View style={styles.focusContainer}>
                        <TouchableOpacity onPress={() => console.log('Moon pressed')}>
                            <Icon name="moon-o" size={30} color="#000" />
                        </TouchableOpacity>
                        <Text style={styles.focusLabel}>HocusFocus Mode</Text>
                        <SwitchSelector
                            options={[{ label: 'Easy', value: 'Easy' }, { label: 'Hard', value: 'Hard' }]}
                            initial={0}
                            onPress={toggleSwitch}
                            style={styles.switchSelector}
                            buttonColor="#FF69B4"
                            textColor="#000"
                            selectedColor="#fff"
                            hasPadding
                        />
                    </View>
                </View>

                {/* Points Section */}
                <View style={styles.pointsContainer}>
                    <Text style={styles.pointsText}>Total Points: {points.toFixed(1)}</Text>
                </View>

                {/* Book List & Donation Options */}
                <ScrollView style={styles.scrollContainer}>
                    {/* Book List */}
                    <Text style={styles.sectionTitle}>Buy Books</Text>
                    {books.map((book, index) => (
                        <View key={index} style={styles.bookItem}>
                            <Image source={{ uri: book.image }} style={styles.bookImage} />
                            <View style={styles.bookDetails}>
                                <Text style={styles.bookTitle}>{book.title}</Text>
                                <Text style={styles.bookPrice}>{book.price}</Text>
                                <TouchableOpacity
                                    style={styles.buyButton}
                                    onPress={() => handleBuyBook(book)}
                                >
                                    <Text style={styles.buttonText}>Buy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}

                    {/* Donation Section */}
                    <Text style={styles.sectionTitle}>Donate Points</Text>
                    <View style={styles.donationOptions}>
                        <TouchableOpacity style={styles.donationButton} onPress={handleDonateToCharity}>
                            <Text style={styles.buttonText}>Donate to Charity</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.donationButton} onPress={handlePlantTrees}>
                            <Text style={styles.buttonText}>Plant Trees</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            {/* Confirmation Modal */}
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        {/* Close button at the top right */}
                        <TouchableOpacity style={styles.closeButton} onPress={cancelPurchase}>
                            <Icon name="times" size={20} color="#000" />
                        </TouchableOpacity>

                        <Text style={styles.modalTitle}>Confirm Purchase</Text>
                        {selectedBook && (
                            <>
                                <Text style={styles.modalText}>Do you want to buy "{selectedBook.title}" for {selectedBook.price}?</Text>
                                <View style={styles.modalButtons}>
                                    <TouchableOpacity style={styles.confirmButton} onPress={confirmPurchase}>
                                        <Text style={styles.buttonText}>Confirm</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cancelButton} onPress={cancelPurchase}>
                                        <Text style={styles.buttonText}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </View>
                </View>
            </Modal>

            {/* Charity Donation Modal */}
            <Modal
                transparent={true}
                visible={isDonateModalVisible}
                onRequestClose={() => setIsDonateModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        {/* Close button for donation modal */}
                        <TouchableOpacity style={styles.closeButton} onPress={() => setIsDonateModalVisible(false)}>
                            <Icon name="times" size={20} color="#000" />
                        </TouchableOpacity>

                        <Text style={styles.modalTitle}>Select Charity</Text>
                        {charitableInstitutions.map((institution, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.charityOption}
                                onPress={() => confirmDonation(institution.name)}
                            >
                                <Text style={styles.charityText}>{institution.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </Modal>

            {/* Donation Amount Modal */}
            <Modal
                transparent={true}
                visible={isDonationAmountModalVisible}
                onRequestClose={() => setIsDonationAmountModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        {/* Close button for donation amount modal */}
                        <TouchableOpacity style={styles.closeButton} onPress={() => setIsDonationAmountModalVisible(false)}>
                            <Icon name="times" size={24} color="#000" />
                        </TouchableOpacity>

                        <Text style={styles.modalTitle}>Enter Donation Amount</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter amount (max: points available)"
                            keyboardType="numeric"
                            value={donationAmount}
                            onChangeText={setDonationAmount}
                        />
                        <TouchableOpacity style={styles.confirmButton} onPress={handleDonation}>
                            <Text style={styles.buttonText}>Donate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Tree Donation Modal */}
            <Modal
                transparent={true}
                visible={isTreeDonationModalVisible}
                onRequestClose={() => setIsTreeDonationModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        {/* Close button for tree donation modal */}
                        <TouchableOpacity style={styles.closeButton} onPress={() => setIsTreeDonationModalVisible(false)}>
                            <Icon name="times" size={20} color="#000" />
                        </TouchableOpacity>

                        <Text style={styles.modalTitle}>Enter Number of Trees to Plant</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter number of trees (max: points available)"
                            keyboardType="numeric"
                            value={treesToDonate}
                            onChangeText={setTreesToDonate}
                        />
                        <TouchableOpacity style={styles.confirmButton} onPress={confirmTreeDonation}>
                            <Text style={styles.buttonText}>Donate Trees</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <BottomBar navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF4F2',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
    },
    topContainer: {
        marginBottom: 70,
        flex: 1,
        backgroundColor: '#FFF4F2',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
    },
    topBar: {
        top: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        position: 'absolute',
        backgroundColor: '#FFF4F2',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    focusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    focusLabel: {
        marginLeft: 18,
        fontSize: 16,
        marginRight: 10,
    },
    switchSelector: {
        width: 120,
    },
    pointsContainer: {
        marginTop: '38%',
        backgroundColor: '#FF69B4',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    pointsText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    scrollContainer: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bookItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    bookImage: {
        width: 80,
        height: 120,
        marginRight: 15,
    },
    bookDetails: {
        flex: 1,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bookPrice: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
    },
    buyButton: {
        backgroundColor: '#FF69B4',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
    },
    donationOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    donationButton: {
        backgroundColor: '#FF69B4',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 350,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 8,
    },
    modalText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    confirmButton: {
        backgroundColor: '#FF69B4',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    cancelButton: {
        backgroundColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    charityOption: {
        marginVertical: 10,
        backgroundColor: '#FF69B4',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    charityText: {
        color: '#fff',
        fontSize: 16,
        paddingBottom: 2
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
        marginTop: 8
    },
});

export default ShopScreen;