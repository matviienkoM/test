import React, { FC } from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import i18next, { languageResources } from '../../../../i18n'
import languagesList from '../../../utils/languagesList'
import Layout from '../../layout/Layout'
import Padding from '../../ui/Padding'

const Language:FC = () => {
  
  const changeLng = (lng: string) => {
    i18next.changeLanguage(lng)
  }

  return (
    <Layout isScrollView={false}>
      <Padding>
        <FlatList
          data={Object.keys(languageResources)}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => changeLng(item)}>
              <Text>{languagesList[item].name}</Text>
            </TouchableOpacity>
          )}
        />
      </Padding>
    </Layout>
  )
}

export default Language