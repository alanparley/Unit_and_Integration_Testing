// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number6').click();
    cy.get('.display').should('contain', '6')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number0').click();
    cy.get('.display').should('contain', '0')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '10')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should perform multiple operations chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '12')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should handle positive numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '18')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should handle negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-8')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should handle numbers with decimals', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4.5')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should handle large numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '43046721000')
  })
})

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should give an error if divided by zero', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', "You can't divide by 0")
  })
})