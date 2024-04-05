# "SHS Analyser GitHub Action" Action For GitHub Actions

GitHub Action that handles security scans using dependency-check and publish output to SHS service

## Table of Contents

<!-- toc -->

- [Inputs and Outputs](#inputs-and-outputs)
- [Usage](#usage)
    - [Example Usage 1](#example-usage-1)
    - [Example Usage 2](#example-usage-2)
  
<!-- tocstop -->

## Inputs and Outputs

### Inputs

| Input               | Type   | Description                |
|---------------------|--------|----------------------------|
| `exampleInput`      | String | Example Input description  |

### Outputs

| Output          | Type   | Description                |
|-----------------|--------|----------------------------|
| `exampleOutput` | String | Example Output description |

See [action.yml](action.yml) for the full documentation for this action's inputs and outputs.

## Usage

### Example Usage 1

Add the following step to your workflow:

```yaml
    - name: SHS Analyser GitHub Action
      id: shs-analyser  # this can be whatever you'd like. It's just an id so that we can reference the step in github actions
      uses: dh-io-actions/shs-analyser@v1
      with:
        secret: EXAMPLE_SECRET
```

### Example Usage 2

Different way to configure workflows with your action goes here.


[⬆️ back to top](#table-of-contents)
