const formInfoUrl = 'https://coletum.com/api/graphql?query={form(id:23458){id,name,status,category,answerTracking,publicAnswers}}&token=7s5txcu909kwc48wookgw8g00occokk'
const formStructureUrl = 'https://coletum.com/api/graphql?query=%7Bform_structure(formId:23458)%7Blabel,componentId,type,helpBlock,order,options,minimum,maximum,widget,components%7Blabel,componentId,type,options,minimum,maximum,widget,components%7Blabel,componentId,type,options,minimum,maximum,widget,components%7Blabel,componentId,type,options,minimum,maximum,widget,components%7Blabel,type,options,minimum,maximum,widget%7D%7D%7D%7D%7D%7D&token=7s5txcu909kwc48wookgw8g00occokk'


export async function getFormInfo(){
    const request = await fetch(formInfoUrl)
    if(request.status !== 200) return false

    const response = await request.json()
    return response
}

export async function getFormStructure(){
    const request = await fetch(formStructureUrl)
    if(request.status !== 200) return false

    const response = await request.json()
    return response
}

export async function getInitialData(){
    const requests = await Promise.all([
        getFormInfo(),
        getFormStructure()
    ])

    if(requests[0] && requests[1]){
        const formInfo = {...requests[0].data.form[0]}
        const formStructure = [...requests[1].data.form_structure]

        return {
            formInfo,
            formStructure
        }
    }

    return false
}