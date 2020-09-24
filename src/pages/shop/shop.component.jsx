import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util'
import CollectionOverview from '../../components/collection-overview/collectionOverview';
import {update_shop_data} from '../../actions/shop_actions';
function ShopPage({update_shop_data}) {
  const unsubscribeFromSnapshot = null;

  useEffect(() => {
    console.log('Im called');
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const shopData = convertCollectionSnapshotToMap(snapshot);
      update_shop_data(shopData);
    })
  }, [])

  return (
    <div>
      SHOP PAGE
      <CollectionOverview />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    update_shop_data: (shopData) => dispatch(update_shop_data(shopData))
  }
}

export default connect(null, mapDispatchToProps)(ShopPage); 



// import React from "react";
// import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util'
// import CollectionOverview from '../../components/collection-overview/collectionOverview';

// class ShopPage extends React.Component {
  
//   unsubscribeFromSnapshot = null;

//   componentDidMount() {
//     console.log('Im called');
//     const collectionRef = firestore.collection('collections');
//     collectionRef.onSnapshot(async snapshot => {
//       convertCollectionSnapshotToMap(snapshot);
//     })
//   }

//   render() {
//     return (
//       <div>
//         SHOP PAGE
//         <CollectionOverview />
//       </div>
//     );
//   }
// }

// export default ShopPage; 