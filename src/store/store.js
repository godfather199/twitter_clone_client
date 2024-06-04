import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import postReducer from './slices/postSlice'
import userReducer from './slices/userSlice'



const persistConfig = {
    key: 'root',
    storage
}


const combinedReducer = combineReducers({
    post: postReducer,
    user: userReducer
})


const persistedReducer = persistReducer(persistConfig, combinedReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
  

export default store