import api from '@/services/api'
import axios from 'axios'
import { allMessages } from '@/services/data/messages.js'

const url = 'https://app.fakejson.com/q'

const payloadMessage = {
  token: '-WodxFsKjdPXsAJ5vTWTYw',
  data: {
    messageId: 'cryptoUUID',
    name: 'companyName',
    isActive: 'numberBool',
    createdAt: 'date|UNIX',
    baseURL: 'internetDomain',
    domain: 'internetUrl',
    _repeat: 5
  }
}

const fetchMessages = () => allMessages

export {
  fetchMessages
}