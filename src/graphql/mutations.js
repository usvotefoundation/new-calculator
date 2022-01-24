/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createState = /* GraphQL */ `
  mutation CreateState(
    $input: CreateStateInput!
    $condition: ModelStateConditionInput
  ) {
    createState(input: $input, condition: $condition) {
      id
      name
      registrationDeadlineType
      dateType
      edRelation
      time
      laws
      updater
      createdAt
      updatedAt
    }
  }
`;
export const updateState = /* GraphQL */ `
  mutation UpdateState(
    $input: UpdateStateInput!
    $condition: ModelStateConditionInput
  ) {
    updateState(input: $input, condition: $condition) {
      id
      name
      registrationDeadlineType
      dateType
      edRelation
      time
      laws
      updater
      createdAt
      updatedAt
    }
  }
`;
export const deleteState = /* GraphQL */ `
  mutation DeleteState(
    $input: DeleteStateInput!
    $condition: ModelStateConditionInput
  ) {
    deleteState(input: $input, condition: $condition) {
      id
      name
      registrationDeadlineType
      dateType
      edRelation
      time
      laws
      updater
      createdAt
      updatedAt
    }
  }
`;