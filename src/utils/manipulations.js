import { getDefaultValues } from './requests'
import {isEqualArrays} from './validations'

/**
 * Exporta a lista de campos obrigatórios do formulário com base
 * na estrutura do formulário em questão.
 *
 * ! Inversão foi feita na verificação, para homologar as validações.
 *
 * @param {array} structure Estrutura do formulário proveniente da API
 * @returns {array} Campos obrigatórios do formulário
 */
export function getRequiredFields(structure){
    return structure.filter(field => {
        return field.minimum.value === 0 && !['ratingfield', 'datefield'].includes(field.type)
    })
}

/**
 * Verifica se os campos obrigatórios estão devidamente preenchidos,
 * e retorna uma lista de campos que não passaram na validação.
 *
 * @param {array} requireds Campos obrigatórios do formulário
 * @param {array} answers Objeto global das respostas atuais do formulário
 * @returns {array} Lista de ID de campos que não estão preenchidos adequadamente
 */
export function assertRequiredFields(requireds, answers){
    let alerts = []

    requireds.forEach(required => {
        const defaultValue = getDefaultValues(required.type)

        if(
            defaultValue === answers[required.componentId] ||
            isEqualArrays(defaultValue, answers[required.componentId])
        ){
            alerts.push(required.componentId)
        }
    })

    return alerts
}