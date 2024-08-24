import React from 'react';
import {default as IonIcon} from 'react-native-vector-icons/dist/Ionicons';
interface BottomBarIconProps {
  focused: boolean;
  color: string;
  iconName: string;
  size: number;
}

const BottomBarIcon: React.FC<BottomBarIconProps> = ({
  focused,
  color,
  size,
  iconName,
}) => {
  return (
    <IonIcon name={iconName} size={size} color={focused ? color : '#FFF'} />
  );
};

export default React.memo(BottomBarIcon);
