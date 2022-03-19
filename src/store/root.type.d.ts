
interface RequestInterface {
  pending: boolean
  failed: boolean
  suceeded: boolean
  [key: string]: any
}

interface RequestAction {
  status: string
  value: boolean
}

interface SetFieldAction {
  field: string
  value: any
}